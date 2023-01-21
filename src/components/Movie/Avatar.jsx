function Avatar({ name, char, img }) {
  return (
    <li className="avatar flex items-center gap-5 shrink-0">
      {img ? 
        <img
          className="w-[75px] h-[75px] object-cover rounded-full"
          src={`https://image.tmdb.org/t/p/w200/${img}`}
          alt={name}
        />
        :
        <img
        className="w-[75px] h-[75px] object-cover rounded-full"
        src={"https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"}
        alt={name}
      />
      }
      <div className="cast-details">
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="font-normal">{char}</p>
      </div>
    </li>
  );
}

export default Avatar;
