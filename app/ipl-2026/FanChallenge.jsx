"use client";

import { useState, useEffect } from "react";

export default function FanChallenge() {
  const [vote, setVote] = useState(null);
  const [votes, setVotes] = useState({ csk: 0, punjab: 0 });
  const [likes, setLikes] = useState({ csk: 0, punjab: 0 });

  // Fetch current votes/likes on load
  useEffect(() => {
    async function fetchVotes() {
      const res = await fetch("/api/ipl-vote");
      const data = await res.json();
      setVotes(data.votes);
      setLikes(data.likes);
    }
    fetchVotes();
  }, []);

  const handleVote = async (team) => {
    setVote(team);
    const res = await fetch("/api/ipl-vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "vote", team }),
    });
    const data = await res.json();
    setVotes(data.votes);
  };

  const handleLike = async (team) => {
    const res = await fetch("/api/ipl-vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "like", team }),
    });
    const data = await res.json();
    setLikes(data.likes);
  };

  const totalVotes = votes.csk + votes.punjab;
  const percent = (team) => (totalVotes ? Math.round((votes[team] / totalVotes) * 100) : 0);

  return (
    <section className="py-14 max-w-3xl mx-auto px-6 bg-yellow-50 rounded-xl shadow text-center">
      <h2 className="text-3xl font-bold text-amber-600 mb-6">Fan Challenge: Who Will Win Today?</h2>
      <p className="text-gray-700 mb-4">Cast your vote and show support for your favorite team!</p>

      <div className="flex justify-center gap-10 mb-6">
        <button
          onClick={() => handleVote("csk")}
          className={`px-6 py-3 rounded-xl font-semibold transition ${
            vote === "csk" ? "bg-emerald-600 text-white" : "bg-white text-emerald-600 border border-emerald-600"
          }`}
        >
          CSK {vote === "csk" && "✓"}
        </button>
        <button
          onClick={() => handleVote("punjab")}
          className={`px-6 py-3 rounded-xl font-semibold transition ${
            vote === "punjab" ? "bg-emerald-600 text-white" : "bg-white text-emerald-600 border border-emerald-600"
          }`}
        >
          Punjab {vote === "punjab" && "✓"}
        </button>
      </div>

      <p className="text-gray-700 mb-4">
        {totalVotes > 0 && `Current Votes: CSK ${percent("csk")}% - Punjab ${percent("punjab")}%`}
      </p>

      <div className="flex justify-center gap-10">
        <button
          onClick={() => handleLike("csk")}
          className="flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          ❤️ CSK {likes.csk}
        </button>
        <button
          onClick={() => handleLike("punjab")}
          className="flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          ❤️ Punjab {likes.punjab}
        </button>
      </div>

      {vote && <p className="mt-4 text-gray-700">You voted for: <strong>{vote.toUpperCase()}</strong></p>}
    </section>
  );
}