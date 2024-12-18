import React from "react";
import { generate, generateRandomMessage } from "../utils/helper";

const commentsdata = [
  {
    name: generate(),
    text: generateRandomMessage(),
    replies: [],
  },
  {
    name: generate(),
    text: generateRandomMessage(),
    replies: [
      {
        name: generate(),
        text: generateRandomMessage(),
        replies: [],
      },
      {
        name: generate(),
        text: generateRandomMessage(),
        replies: [
          {
            name: generate(),
            text: generateRandomMessage(),
            replies: [
              // {
              //   name: "Aryan Sharma",
              //   text: generateRandomMessage(),
              //   replies: [
              // {
              //   name: "Aryan Sharma",
              //   text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              //   replies: [
              //     {
              //       name: "Aryan Sharma",
              //       text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              //       replies: [],
              //     },
              //   ],
              // },
              // {
              //   name: "Aryan Sharma",
              //   text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              //   replies: [],
              // },
              // ],
              // },
            ],
          },
        ],
      },
    ],
  },
  {
    name: generate(),
    text: generateRandomMessage(),
    replies: [],
  },
  {
    name: generate(),
    text: generateRandomMessage(),
    replies: [],
  },
  {
    name: generate(),
    text: generateRandomMessage(),
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="p-3 flex bg-gray-100 rounded-lg my-2">
      <img
        src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        alt="User : "
        className="w=8 h-8"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const Commentlist = ({ comment }) => {
  return comment.map((comments, index) => (
    <div key={index}>
      <Comment data={comments} />
      <div className="ml-5 pl-5">
        <Commentlist comment={comments.replies} />
      </div>
    </div>
  ));
};

function CommentsContainer() {
  return (
    <div className="p-2 m-2">
      <h1 className="font-bold text-xl ">Comments : </h1>
      <Commentlist comment={commentsdata} />
    </div>
  );
}

export default CommentsContainer;
