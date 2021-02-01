import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => <nav>
    <ul style={{display:"flex", justifyContent:"center", marginTop:50, paddingLeft:0, cursor:"pointer"}}>
        <li>
            <Link to="/" style={{ marginRight: 10 }}>
                <FontAwesomeIcon icon={faTwitter} size="2x" color={"#1da1f2"} />
            </Link>
        </li>
        <li>
            <Link to="/profile"
                style={
                    {
                        marginLeft: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontSize: 12,
                    }
                }
            >
                <FontAwesomeIcon icon={faUser} size="2x" color={"#1da1f2"} style={{marginBottom:10}}/>
                {userObj.displayName} Profile
            </Link>
        </li>
    </ul>
</nav>

export default Navigation;