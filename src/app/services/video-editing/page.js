import VideoEditingClient from "./VideoEditingClient";

export const metadata = {
  title: "Professional Video Editing Services",
  description:
    "High-quality video production and post-production for commercials, social media, and corporate videos. Tell your story through professional visual storytelling.",
  alternates: {
    canonical: "https://funcode-agency.com/services/video-editing",
  },
};

export default function VideoEditingPage() {
  return <VideoEditingClient />;
}
