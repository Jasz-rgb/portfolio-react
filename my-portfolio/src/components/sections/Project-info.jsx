export const projects = [
  {
    id: 1,
    title: "Revenue Leakage in Indian Hospitality Industry",
    description: `Uncovered ₹30 Cr revenue loss across 1.3L+ hotel bookings 
    (25 hotels, 92 days) through data analytics. 
    Applied EDA: K-Means clustering, and city/platform-wise analysis to detect last-minute cancellations, 
    unbilled services, and underutilized inventory. 
    Proposed data-driven strategies including dynamic pricing, micro-moment bundling, 
    AI-based staffing, and real-time audit systems to reduce revenue leakage.`,
    image: "/images/revenue.png",
    technologies: ["Python", "Pandas", "K-Means", "EDA", "Data Analytics"],
    buttons: [
      {
        label: "Report",
        link: "https://www.canva.com/design/DAGrpSNL_Q8/2Em11N_VzU9PGjw9rVuUiA/edit?utm_content=DAGrpSNL_Q8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
      { label: "Dashboard", link: "https://lnkd.in/gNcUxAHQ" },
    ],
  },
  {
    id: 2,
    title: "Quant – Portfolio Optimization and Backtesting",
    description: `Developed and evaluated a quantitative equity portfolio strategy using 
    Momentum and Volatility indicators. Integrated Alpha Vantage API for data retrieval 
    and applied Risk Parity for asset allocation. 

    Key Features:
    - Constructed a risk-parity portfolio with equal risk contribution per asset.
    - Backtested over 2 years with monthly rebalancing and a 6-month lookback window.
    - Included realistic transaction costs (0.001).
    - Used systematic selection and dynamic allocation to optimize return-risk balance.

    Outcome: Validated the efficiency of Risk Parity and systematic rebalancing in portfolio management.`,
    image: "/images/quant.png",
    technologies: ["Python", "Finance", "PyPortfolioOpt", "Backtesting"],
    buttons: [
      { label: "View Project", link: "https://github.com/Jasz-rgb/Quant.git" },
      {
        label: "View PPT",
        link: "https://1drv.ms/w/c/874e68546301f6f0/ERPS3liwJ_ZGpoAqpA7rxAsBSthCpNT9-0pBESuB6uGq8g?e=2f3fFu",
      },
    ],
  },
  {
    id: 3,
    title: "Interactive Blinn-Phong Lighting with OpenGL & ImGui",
    description: `Created a modern, user-interactive OpenGL 3D environment featuring Blender-imported models and 
    Blinn-Phong lighting. Integrated ImGui for real-time tweaking of light type, lighting parameters, and camera movement. 
    Included WASD-based camera movement for dynamic inspection of lighting effects.

    Outcome: Built a strong foundation in graphics programming, GLSL shaders, and real-time scene control.`,
    image: "/images/opengl.png",
    technologies: ["C++", "OpenGL", "ImGui", "Blender", "GLSL"],
    buttons: [
      {
        label: "View Project",
        link: "https://github.com/Jasz-rgb/Blinnphong",
      },
      {
        label: "Demonstration",
        link: "https://drive.google.com/file/d/16Wu06nDMuVhevVnu4XoF8Q1Hf7iBsF3k/view",
      },
      {
        label: "View PPT",
        link: "https://www.canva.com/design/DAGjNRu6quo/5gGCl73x9Veb-W-YhKi06Q/edit?utm_content=DAGjNRu6quo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
    ],
  },
  {
    id: 4,
    title: "RFID-Based Wearable Item Tracker",
    description: `Designed and prototyped an affordable RFID-based wearable system to prevent the loss of keys and other essential items. 
    The solution integrates a wearable handband and a keychain, utilizing RFID technology to detect separation between the user and their belongings. 
    When the distance threshold is exceeded, the handband provides a vibration alert, helping users avoid misplacement and potential security risks. 

    Responsibilities included embedded systems programming, hardware design, and user experience optimization.

    Outcome: Strengthened skills in embedded systems, hardware integration, and user-centered product design.`,
    technologies: ["Embedded C", "RFID", "IoT", "Wearables"],
    buttons: [
      {
        label: "View PPT",
        link: "https://www.canva.com/design/DAGkcUnDI9U/fmVIEA6YPOcfJuuoxcym6A/edit?utm_content=DAGkcUnDI9U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
    ],
  },
  {
    id: 5,
    title: "Song Genre Clustering using BOW and TF-IDF methods",
    description: `Clustered songs based on audio features to group them by genre using unsupervised learning. 
    Included audio feature extraction, dimensionality reduction, and clustering algorithms to reveal genre patterns. 

    Outcome: Gained insights into music data and the effectiveness of clustering in genre classification.`,
    image: "/images/song.png",
    technologies: ["Python", "Scikit-learn", "TF-IDF", "Clustering"],
    buttons: [
      {
        label: "View Project",
        link: "https://github.com/Jasz-rgb/song-genre-clustering.git",
      },
    ],
  },
  {
    id: 6,
    title: "3D-Reconstruction of a Temple",
    description: `Reconstructed a 3D model of a temple from a set of 2D images using computer vision techniques. 

    - Sparse Reconstruction: Created a sparse point cloud by finding key points and their 3D positions.
    - Dense Reconstruction: Built a detailed 3D model using image rectification, disparity, and depth maps. 

    Outcome: Successfully produced a sparse 3D representation, deepening understanding of structure-from-motion and stereo vision.`,
    image: "/images/sparse.png",
    technologies: ["Python", "OpenCV", "3D Vision", "SfM"],
    buttons: [
      {
        label: "View Project",
        link: "https://github.com/Jasz-rgb/3D-reconstruction.git",
      },
      {
        label: "View PPT",
        link: "https://1drv.ms/w/c/874e68546301f6f0/EbCCrnR2Rj1MlMxQlYVwdOIBpy23kjE0qiwvaBgm49UnTw?e=fKEqqA",
      },
    ],
  },
  {
    id: 7,
    title: "2048 – AI Game Solver",
    description: `Developed the classic 2048 puzzle game and implemented AI strategies to solve it efficiently. 
    Built playable versions using both command line and Pygame. 

    Explored and implemented AI algorithms such as Expectimax and Expectiminimax to maximize scores and extend gameplay. 

    Outcome: Created an AI capable of achieving high scores in 2048, deepening understanding of game AI and algorithm design.`,
    image: "/images/2048.png",
    technologies: ["Python", "AI", "Pygame", "Algorithms"],
    buttons: [
      { label: "View Project", link: "https://github.com/Jasz-rgb/2048.git" },
    ],
  },
  {
    id: 8,
    title: "Lucas-Kanade Sparse Optical Flow",
    description: `Implemented the Lucas-Kanade sparse optical flow algorithm to track feature points across video frames. 
    Used OpenCV’s goodFeaturesToTrack for feature detection and calcOpticalFlowPyrLK for motion estimation. 
    Built using basic OpenCV functions for clarity and educational value. 

    Outcome: Enabled robust tracking of object movement in video, providing a foundation for further work in motion analysis and computer vision.`,
    image: "/images/man.png",
    technologies: ["Python", "OpenCV", "Computer Vision", "Optical Flow"],
    buttons: [
      {
        label: "View Project",
        link: "https://github.com/Jasz-rgb/Lucas-Kanade-Sparse.git",
      },
      {
        label: "View PPT",
        link: "https://1drv.ms/w/c/874e68546301f6f0/ESx68YU0VJVHqRscsSQoPHMBAgQttraEB27bRFJRRlZ6pw?e=tuJHah",
      },
    ],
  },
];
