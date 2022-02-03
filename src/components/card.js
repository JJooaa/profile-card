import React from "react";
import "./card.css";
import dude from "../images/image-victor.jpg";

const array = [
    { number: "80k", text: "Followers" },
    { number: "803k", text: "Likes" },
    { number: "1.4k", text: "Photos" },
];
const Card = () => {
    return (
        <div className="container">
            <div className="topimage">
                <img src={dude} />
            </div>
            <div className="info">
                <h4 style={{ fontWeight: 700, fontSize: 18 }}>
                    Victor Crest{" "}
                    <span style={{ color: "#6B7082", fontWeight: 400 }}>
                        26
                    </span>
                </h4>
                <p
                    style={{
                        fontWeight: 400,
                        fontSize: 14,
                        color: "#6B7082  ",
                    }}
                >
                    London
                </p>
            </div>
            <div className="card-footer">
                <div
                    style={{
                        width: 249,
                        height: 40,
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    {array.map((item) => (
                        <div className="x">
                            <p style={{ fontWeight: 700, fontSize: 18 }}>
                                {item.number}
                            </p>
                            <p
                                style={{
                                    fontWeight: 400,
                                    fontSize: 10,
                                    color: "#6B7082",
                                }}
                            >
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
