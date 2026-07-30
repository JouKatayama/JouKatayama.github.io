export interface SiteVisual {
  src: string;
  alt: string;
  caption: string;
  position?: string;
}

export const pageVisuals: Record<string, SiteVisual> = {
  about: {
    src: "/images/kyoto-riverside-v3.webp",
    alt: "京都の鴨川沿いを歩きながら対話する若者たちのイメージ",
    caption: "京都から、次の可能性をひらく。",
    position: "62% center",
  },
  activities: {
    src: "/images/career-dialogue-v2.webp",
    alt: "キャリアについて一対一で対話するイメージ",
    caption: "対話と実践を、ひと続きに。",
    position: "50% 42%",
  },
  projects: {
    src: "/images/project-workshop-v2.webp",
    alt: "若者たちがプロジェクトを形にするワークショップのイメージ",
    caption: "考え、つくり、誰かへ届ける。",
    position: "50% 48%",
  },
  insights: {
    src: "/images/ai-research-v3.webp",
    alt: "AIとキャリアに関するプロジェクトを調査するイメージ",
    caption: "問いを深め、実践に使える知へ。",
    position: "58% center",
  },
  news: {
    src: "/images/community-circle-v3.webp",
    alt: "多世代の参加者が活動について語り合うイメージ",
    caption: "活動のいまを、ひらいて伝える。",
    position: "50% 45%",
  },
  organization: {
    src: "/images/kyoto-workspace-v3.webp",
    alt: "対話の準備が整えられた京都の活動拠点のイメージ",
    caption: "対話を迎える、京都の拠点。",
    position: "58% center",
  },
  join: {
    src: "/images/community-circle-v3.webp",
    alt: "学生・社会人・専門家が輪になって対話するイメージ",
    caption: "立場を越えて、一緒につくる。",
    position: "52% 45%",
  },
  contact: {
    src: "/images/kyoto-workspace-v3.webp",
    alt: "相談者を迎える準備が整った静かな活動スペースのイメージ",
    caption: "安心して話せるところから。",
    position: "60% center",
  },
  privacy: {
    src: "/images/kyoto-workspace-v3.webp",
    alt: "落ち着いた活動スペースとノートのイメージ",
    caption: "信頼を守ることも、活動の土台。",
    position: "54% center",
  },
  notFound: {
    src: "/images/kyoto-riverside-v3.webp",
    alt: "京都の鴨川沿いを歩く若者たちのイメージ",
    caption: "道を戻って、もう一度探す。",
    position: "62% center",
  },
};

export const activityVisuals: Record<string, SiteVisual> = {
  "career-support": pageVisuals.activities,
  internship: pageVisuals.projects,
  "ai-dx": pageVisuals.insights,
  community: pageVisuals.join,
};

export const projectVisuals: Record<string, SiteVisual> = {
  "career-dialogue-community": pageVisuals.insights,
  "cross-boundary-project": pageVisuals.projects,
  "remind-lab": pageVisuals.activities,
};

export const insightVisuals: Record<string, SiteVisual> = {
  "ai-and-career-agency": pageVisuals.insights,
  "career-nonresponse": pageVisuals.about,
  "external-infrastructure": pageVisuals.join,
};

export const newsVisuals: Record<string, SiteVisual> = {
  "site-preparation": pageVisuals.organization,
  "partnership-inquiry": pageVisuals.join,
};
