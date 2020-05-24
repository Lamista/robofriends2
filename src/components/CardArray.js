import React from "react";
import Card from "./Card";

function CardArray({ robots }) {
    return (
        <div>
            {robots.map((robot, index) => {
                return (
                    <Card
                        key={robot.id}
                        id={robot.id}
                        name={robot.name}
                        email={robot.email}
                    />
                );
            })}
        </div>

    );
}

export default CardArray;