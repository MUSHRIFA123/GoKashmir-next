"use client";
import React, { useEffect, useState } from "react";

const HomepageEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <>{/* Your dynamic grid goes here */}</>
  );
};

export default HomepageEvents;
