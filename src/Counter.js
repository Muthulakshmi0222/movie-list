import IconButton from '@mui/material/IconButton';
import { useState } from "react";
function Counter() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    return (
      <div className="counter-container">
        <IconButton  
        className="likes-dislike" 
        onClick={() => setLike(like + 1)} 
        aria-label="delete" 
        color="primary">
        👍{like}
      </IconButton>
      <IconButton 
      className="likes-dislikes"
      onClick={() => setDislike(dislike + 1)}
      aria-label="delete"
       color="primary">
      👎{dislike}
  </IconButton>
      </div>
    );
  }
  export {Counter};
//   export {Counter};  -- used to export one or more functions