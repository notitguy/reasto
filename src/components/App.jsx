function Button({ handleClick, children }) {

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function alertMoviename() {
    alert(`Playing ${movieName}!`);
  }

  return (
    <Button handleClick={alertMoviename} >
      Play "{movieName}"
    </Button>
  );
}

function UploadButton({ message }) {
  // function alertUpload() {
  //   alert(message);
  // }
  return (
    <Button handleClick={() => alert(message)} >
      Upload image
    </Button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton message="Uploading!" />
    </div>
  );
}

// https://react.dev/learn/responding-to-events#event-propagation