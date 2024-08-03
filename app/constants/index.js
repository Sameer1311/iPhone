"use client"
import { useEffect } from "react";

export const highlightslides = [
    {
        id: 1,
        textLists: [
            "Enter A17 Pro.",
            "Game-Changing Chip",
            "GroundBreaking Performance",
        ],
        // video: window.innerWidth <760 ? '/highlight-first.mp4' : '/highlight-first.mp4' ,
        video:'/video/highlight-first.mp4',
      
        vedioduration: 4
    },

    {
        id: 2,
        textLists: ["Titanium.", 
            "So strong. So light. So Pro."],
        // video: window.innerWidth <760 ? '/smallHero.mp4' :   '/hightlight-sec.mp4',
        video:'/video/hightlight-sec.mp4',
        videoDuration: 5,
    },
    {
        id: 3,
        textLists: [
            "iPhone 15 Pro Max has the",
            "longest optical zoom in",
            "iPhone ever. Far out.",
        ],
        // video:  window.innerWidth <760 ? '/smallHero.mp4' :'/hightlight-third.mp4',
        video:'/video/hightlight-third.mp4',
        videoDuration: 2,
    },
    {
        id: 4,
        textLists: ["All-new Action button.", "What will yours do?."],
        // video:  window.innerWidth <760 ? '/hightlight-fourth.mp4' :'/hightlight-fourth.mp4',
        video:'/video/hightlight-fourth.mp4',
        videoDuration: 3.63,
    }
];

export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img:'./yellow.png'
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img:'./blue.png'
      
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img:'./white.png'

    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img:'./black.png'
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];