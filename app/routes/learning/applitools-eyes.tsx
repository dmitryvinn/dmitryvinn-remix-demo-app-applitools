import type { MetaFunction } from "remix";
import { YouTubeLite } from "react-youtube-lite";

export const meta: MetaFunction = () => {
  return {
    title: "Applitools Eyes",
  };
};

export default function Index() {
  return (
    <div className="about">
      <div className="about__intro">
        <h2>Applitools Eyes</h2>
        <p>
          Want to learn more about Applitools? Check out one of their
          introductory videos:
        </p>
        <YouTubeLite
          url="https://youtu.be/id0moFoDHG0"
          title="Applitools Eyes - Introduction to Automated Visual Testing"
        />
      </div>
    </div>
  );
}
