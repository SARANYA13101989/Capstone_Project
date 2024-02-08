import React from 'react'
import styled from "styled-components";

export default function Login() {
  const handleClick = async () => {
    const clientId = "1b36338deb844cd79e83177b548362aa";
    const redirectUrl = "http://localhost:5173/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read"
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}
        &response_type=token&show_dialog=true`;
  };



  return (
    <Container>
    Music is everywhere
      <img src= "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
        alt='spotify' />
      <button onClick={handleClick}>Stay Blissfull</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100Vw;
  background-color: #1db954;
  gap: 5rem;
  p{
    font:bold;
  }
img{
    height: 20vh;
    
}
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #49f585;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }

// const container = styled.div`
//   display: flex;
//   flex-direction: column;
/* justify-content: center; */
/* align-items: center; */





// import React from "react";
// import styled from "styled-components";

// export default function Login() {
//   const handleClick = async () => {
//     const clientId = "43bb69621e3c4cd2b7c88be8f1da9218";
//     const redirectUrl = "http://localhost:3000/";
//     const apiUrl = "https://accounts.spotify.com/authorize";
//     const scope = [
//       "user-read-private",
//       "user-read-email",
//       "user-modify-playback-state",
//       "user-read-playback-state",
//       "user-read-currently-playing",
//       "user-read-recently-played",
//       "user-read-playback-position",
//       "user-top-read",
//     ];
//     window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
//       " "
//     )}&response_type=token&show_dialog=true`;
//   };
//   return (
//     <Container>
//       <img
//         src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
//         alt="spotify"
//       />
//       <button onClick={handleClick}>Feel Bliss</button>
//     </Container>
//   );
// }

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   height: 100vh;
//   width: 100vw;
//   background-color: #1db954;
//   gap: 5rem;
//   img {
//     height: 20vh;
//   }
//   button {
//     padding: 1rem 5rem;
//     border-radius: 5rem;
//     background-color: black;
//     color: #49f585;
//     border: none;
//     font-size: 1.4rem;
//     cursor: pointer;
//   }
// `;