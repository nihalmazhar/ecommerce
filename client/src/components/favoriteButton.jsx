import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as Solidheart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";

function favoriteButton({ productId, userId }) {
  const whiteheart = (
    <FontAwesomeIcon icon={faHeart} size="2xl" style={{ color: "#000000" }} />
  );
  const redheart = (
    <FontAwesomeIcon
      icon={Solidheart}
      size="2xl"
      style={{ color: "#e01b24" }}
    />
  );

  const [isFavorites, setIsFavorites] = useState();

  const fetchFavoriteStatus = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/wishlist/${userId}`
      );

      if (response.data.items.some((item) => item.productId === productId)) {
        setIsFavorites(true);
      } else {
        setIsFavorites(false);
      }
    } catch (error) {
      console.log("Error fetching favorite status:", error);
    }
  };

  useEffect(() => {
    fetchFavoriteStatus();
  }, [productId, userId, isFavorites]);

  const toggleFavorite = async () => {
    try {
      if (!isFavorites) {
        await axios.post(`http://localhost:4000/api/wishlist/${userId}`, {
          productId,
        });
        setIsFavorites(true);
        toast.info("Product added to wishlist");
      } else {
        await axios.delete(`http://localhost:4000/api/wishlist/${userId}`, {
          data: { productId },
        });
        setIsFavorites(false);
        toast.error("Product removed from wishlist");
      }

      // setIsFavorites(!isFavorites)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button className="favorite" onClick={toggleFavorite}>
        {isFavorites ? redheart : whiteheart}
      </button>
    </div>
  );
}

export default favoriteButton;
