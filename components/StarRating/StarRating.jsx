import { useState } from "react";
import Star from "../Star/Star";
import { StarContainer, StarRatingContainer, Text } from "./StarRating.styled";

export default function StarRating(props) {
  const {
    maxRating = 5,
    color = "#fcc419",
    size = 48,
    defaultRating = 0,
  } = props;
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  // Handle the rating selection
  function handleRating(rating) {
    setRating(rating);
  }

  return (
    <StarRatingContainer>
      <StarContainer>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </StarContainer>
      <Text color={color} size={size}>
        {tempRating || rating || 0}
      </Text>
    </StarRatingContainer>
  );
}
