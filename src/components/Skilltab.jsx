"use client";

import React, { useState } from "react";
import style from "../style/skill.module.css";
import myImage from "../Assets/images.png";
import Image from "next/image";
import Modal from "./Modal";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Percentile from "./Percentile";

function Skilltab() {
  const [open, setOpen] = useState(false);
  const [stats, setStats] = useState({
    rank: "10",
    percentile: "12",
    score: "1"
  });

  const handleSave = (data) => {
    setStats(data);
    setOpen(false);
  };
  const total = 15; // Total score
  const percentage = (stats.score / total) * 100;
  return (
    <>
      <h5 className="mt-2">Skill Test</h5>
      <div className={style.skillTabSection}>
        {/* Left Side Section */}
        <div className={style.leftSide}>
          {/* HTML Box with Update Button */}
          <div className={`flex ${style.htmlBox}`}>
            <div className={style.htmlIcon}>
              <Image
                src={myImage}
                alt="HTML Icon"
                className={style.htmlImage}
              />
            </div>
            <div className={style.htmlContent}>
              <h6>Hyper Text Markup Language</h6>
              <p>Question: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
            </div>
            <div className={style.UpdateBtn}>
              <button onClick={() => setOpen(true)}>Update</button>
            </div>
          </div>

          {/* Modal for Updating Statistics */}
          {open && <Modal open={open} setOpen={setOpen} onSave={handleSave} />}

          {/* Quick Statistics */}
          <div className={style.quickBox}>
            <h5 className="mb-6 font-bold">Quick Statistics</h5>
            <div className="flex">
              <div className="flex w-4/12 border-r-2 mr-1">
                <div className="mt-2 mr-2">
                  <span className={style.quickIcons}>🏆</span>
                </div>
                <div>
                  <h6 className="font-bold">{stats.rank}</h6>
                  <h6>Your Rank</h6>
                </div>
              </div>
              <div className="flex w-4/12 border-r-2 mr-1">
                <div className="mt-2 mr-2">
                  <span className={style.quickIcons}>📝</span>
                </div>
                <div>
                  <h6 className="font-bold">{stats.percentile}%</h6>
                  <h6>Percentile</h6>
                </div>
              </div>
              <div className="flex w-4/12">
                <div className="mt-2 mr-2">
                  <span className={style.quickIcons}>✅</span>
                </div>
                <div>
                  <h6 className="font-bold">{stats.score}/15</h6>
                  <h6>Correct Answers</h6>
                </div>
              </div>
            </div>
          </div>
          <div className={style.graphSection}>
            <h5>Comparison Graph</h5>
            <p>
              You Scored {stats.percentile}% percentile which is lower than the average
              percentile 72% of all the enginners who took the assignment
            </p>
            <Percentile/>
          </div>
        </div>

        {/* Right Side Section */}
        <div className={style.rightSide}>
          {/* Progress Bars Section */}
          <div className={style.progressBarSection}>
            <h5>Syllabus Wise Analysis</h5>
            <div className="mt-4">
              <span>HTML Tools, Forms, History</span>
              <div className="progress mt-2">
                <div className="progress-bar bg-info" style={{ width: "80%" }}>
                  80%
                </div>
              </div>
            </div>
            <div className="mt-4">
              <span>Tags & References in HTML</span>
              <div className="progress mt-2">
                <div
                  className="progress-bar bg-warning"
                  style={{ width: "60%" }}
                >
                  60%
                </div>
              </div>
            </div>
            <div className="mt-4">
              <span>Tables & References in HTML</span>
              <div className="progress mt-2">
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "24%" }}
                >
                  24%
                </div>
              </div>
            </div>
            <div className="mt-4">
              <span>Tables & CSS Basics</span>
              <div className="progress mt-2">
                <div
                  className="progress-bar bg-success"
                  style={{ width: "96%" }}
                >
                  96%
                </div>
              </div>
            </div>
          </div>

          {/* Circular Progress Bar Section */}
          <div className={style.circleProgressBarSection}>
            <div className="flex">
              <h5>Question Analysis</h5>
              <h6 className="ml-auto">{stats.score}/15</h6>
            </div>
            <p className="mt-3">
              <strong>
                You scored {stats.score} questions correct out of 15.
              </strong>{" "}
              However, it still needs some improvements.
            </p>
            <div
              style={{ width: "100px", height: "100px" }}
              className="mx-auto pt-3"
            >
              <CircularProgressbar
                value={percentage}
                text={`🎯`}
                styles={buildStyles({
                  textSize: "20px",
                  textColor: "#4CAF50",
                  pathColor: "#4CAF50",
                  trailColor: "#d6d6d6"
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skilltab;
