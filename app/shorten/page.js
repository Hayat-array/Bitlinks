"use client";

import Link from 'next/link';
import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/context/AuthContext';

const Shorten = () => {
  const { currentUser } = useAuth();
  const [url, setUrl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);
  const [userLinks, setUserLinks] = useState([]);
  const [isFetchingLinks, setIsFetchingLinks] = useState(false);

  // Fetch links for the current user
  const fetchUserLinks = useCallback(async () => {
    if (!currentUser?.email) return;
    setIsFetchingLinks(true);
    try {
      const res = await fetch(`/api/generate?email=${encodeURIComponent(currentUser.email)}`);
      const data = await res.json();
      if (data.success) {
        setUserLinks(data.urls);
      }
    } catch (error) {
      console.error("Error fetching links:", error);
    } finally {
      setIsFetchingLinks(false);
    }
  }, [currentUser?.email]);

  useEffect(() => {
    fetchUserLinks();
  }, [fetchUserLinks]);

  const generate = async () => {
    if (!url || !shorturl) {
      alert("Please fill in both fields.");
      return;
    }

    setLoading(true);
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        url: url,
        shorturl: shorturl,
        userEmail: currentUser?.email || null, // Associate with user if logged in
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      const response = await fetch("/api/generate", requestOptions);
      const result = await response.json();

      if (result.success) {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        setUrl("");
        setshorturl("");
        fetchUserLinks(); // Refresh the list
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-purple-50 py-12 px-4 sm:px-6 lg:px-8 font-['Poppins']">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-indigo-600 sm:text-5xl">
            Shorten Your Links
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create fast, secure, and branded short URLs. {currentUser ? "Manage them all in your dashboard." : "Sign in to save and track your links."}
          </p>
        </div>

        {/* Shortener Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-100 transition-all hover:shadow-purple-200/50">
          <div className="p-8 sm:p-10 space-y-8">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Destination URL</label>
                <input
                  type="text"
                  placeholder="https://example.com/very-long-link"
                  className="w-full px-5 py-3 rounded-2xl bg-purple-50 border-2 border-transparent focus:border-purple-500 focus:bg-white focus:outline-none transition-all placeholder-gray-400"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Custom Back-half</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">/</span>
                  <input
                    type="text"
                    placeholder="my-cool-link"
                    className="w-full pl-8 pr-5 py-3 rounded-2xl bg-purple-50 border-2 border-transparent focus:border-purple-500 focus:bg-white focus:outline-none transition-all placeholder-gray-400"
                    value={shorturl}
                    onChange={(e) => setshorturl(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button
              onClick={generate}
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-800 hover:to-indigo-700 text-white font-bold text-lg rounded-2xl shadow-lg transition-all transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:transform-none cursor-pointer"
            >
              {loading ? "Generating..." : "✨ Generate Short Link"}
            </button>

            {generated && (
              <div className="animate-in fade-in slide-in-from-bottom-4 bg-green-50 border-2 border-green-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-green-800 text-sm font-bold uppercase tracking-wider">Success! Your link is ready:</p>
                  <p className="text-green-900 font-mono text-lg break-all">{generated}</p>
                </div>
                <div className='flex gap-2 w-full sm:w-auto'>
                  <button 
                    onClick={() => copyToClipboard(generated)}
                    className="flex-1 sm:flex-none px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-colors cursor-pointer"
                  >
                    Copy
                  </button>
                  <Link href={generated} target="_blank" className="flex-1 sm:flex-none px-6 py-2 bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 rounded-xl font-bold transition-colors text-center">
                    Visit
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* My Links Section */}
        {currentUser && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">My Saved Links</h2>
              <button 
                onClick={fetchUserLinks}
                className="text-purple-600 hover:text-purple-800 text-sm font-semibold flex items-center gap-1 transition-colors cursor-pointer"
              >
                {isFetchingLinks ? "Refreshing..." : "↻ Refresh"}
              </button>
            </div>

            {userLinks.length > 0 ? (
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-purple-100">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-purple-50">
                      <tr>
                        <th className="px-6 py-4 text-sm font-bold text-purple-900 uppercase tracking-wider">Short Link</th>
                        <th className="px-6 py-4 text-sm font-bold text-purple-900 uppercase tracking-wider hidden md:table-cell">Original URL</th>
                        <th className="px-6 py-4 text-sm font-bold text-purple-900 uppercase tracking-wider text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-purple-50">
                      {userLinks.map((item, idx) => {
                        const fullShortUrl = `${process.env.NEXT_PUBLIC_HOST}/${item.shorturl}`;
                        return (
                          <tr key={idx} className="hover:bg-purple-25/50 transition-colors group">
                            <td className="px-6 py-4">
                              <Link href={`/${item.shorturl}`} target="_blank" className="text-purple-600 font-bold hover:underline">
                                /{item.shorturl}
                              </Link>
                            </td>
                            <td className="px-6 py-4 hidden md:table-cell max-w-xs truncate text-gray-500 text-sm">
                              {item.url}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button
                                onClick={() => copyToClipboard(fullShortUrl)}
                                className="px-4 py-1.5 bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-lg text-sm font-bold transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
                              >
                                Copy Link
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : !isFetchingLinks ? (
              <div className="bg-white rounded-3xl p-12 text-center space-y-4 border-2 border-dashed border-purple-200">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🔗</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">No links yet</h3>
                  <p className="text-gray-500">Generate your first short URL to see it here!</p>
                </div>
              </div>
            ) : (
              <div className="animate-pulse space-y-4">
                {[1, 2, 3].map(i => <div key={i} className="h-16 bg-white rounded-2xl" />)}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shorten;
