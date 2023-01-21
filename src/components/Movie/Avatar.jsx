function Avatar({name, char, img}) {
  return (
    <li className="avatar flex items-center gap-5 shrink-0">
      <img
        className="w-[75px] h-[75px] rounded-full"
        src={img}
        alt="avatar"
      />
      <div className="cast-details">
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="font-normal">{char}</p>
      </div>
    </li>
  );
}

export default Avatar;
