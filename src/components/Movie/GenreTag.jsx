function Tag({ name }) {
  return (
    <li className="tag text-base bg-[#454e50] text-white h-7 px-5 py-1 rounded-[40px] flex items-center justify-center">
      {name}
    </li>
  );
}

export default Tag;
