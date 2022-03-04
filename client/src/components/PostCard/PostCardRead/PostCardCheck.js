import React, { useState } from "react";
import PostCardDate from "../PostCards/PostCardDate";
import postLogo from "../../../images/Logo.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import "./PostCardCheck.scss";

const PostCardCheck = (props) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const finalPay = `${props.posts.deliveryFee
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;

  const editHandler = () => {};

  return (
    <div className="postInfoWrap">
      <article className="postInfo__Nav">
        <div className="imgLogo">
          <img src={postLogo} className="postLogo" alt="postLogo"></img>
        </div>
      </article>

      <article className="postInfo__Header">
        <div className="postInfo__title">
          <div className="postInfo__InputTitle">{props.posts.title}</div>
        </div>
        <div className="postInfo__work">
          <HiOutlineDotsVertical size="1.5rem" onClick={editHandler} />
        </div>
      </article>

      <article className="postInfo__Body">
        <section className="postInfo__Left">
          <div className="postInfo__description">
            <div className="postInfo__InputDescription">
              {props.posts.description}
            </div>
          </div>

          <div className="postInfo__list">
            <div className="postInfo__InputList">{props.posts.category}</div>
          </div>

          <div className="postInfo__list">
            <div className="postInfo__InputList">
              <PostCardDate date={props.posts.date} />
            </div>
          </div>

          <div className="postInfo__list">
            <div className="postInfo__InputList">{finalPay}</div>
          </div>

          <div className="postInfo__list">
            <div className="postInfo__InputList">{props.posts.totalNum}명</div>
          </div>

          <div className="postInfo__list">
            <div className="postInfo__inputTag">{props.posts.deliveryTag}</div>
          </div>
          <div className="postInfo__list">
            <div className="postInfo__inputTag">{props.posts.payTag}</div>
          </div>
        </section>

        <section className="postInfo__right">
          <div className="postInfo__postMap">
            <div className="postInfo__InputPostMap">
              만날 장소를 입력해주세요.
            </div>
          </div>
          <div className="postInfo__titleMap">
            <FaMapMarkerAlt size="1.2rem" color="#ff4234" />
            &nbsp;주소{props.posts.postMap}
          </div>
          <div className="postInfo__map">지도</div>
        </section>
      </article>

      <article className="postInfo__Footer">
        <button className="postInfo__actions">&nbsp;참여하기</button>
      </article>
    </div>
  );
};

export default PostCardCheck;
