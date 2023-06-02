import React from "react";
import "./Widgets.css";
import // TwitterTimelineEmbed,
//TwitterShareButton,
// TwitterTweetEmbed,
"react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Gossips" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's new in cinema</h2>

        {/* <TwitterTweetEmbed tweetId={"858551177860055040"} /> */}

        {/* <TwitterTimelineEmbed */}
        {/* sourceType="profile" */}
        {/* screenName="mad_soul05" */}
        {/* options={{ height: 400 }} */}
        {/* /> */}
      </div>
    </div>
  );
}

export default Widgets;
