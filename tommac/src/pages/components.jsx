import React from "react";

export default function JumpingLetters() {
    const emoji = "🎉";
    const repeatEmoji = emoji.repeat(50);

    return (
        <section className="animate-bounce">
            <p className="justify-center">
                {repeatEmoji}
                </p>
        </section>
    );
}


