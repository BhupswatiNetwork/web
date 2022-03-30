function Team({ member }) {
  return (
    <div className='member'>
      <div className='member_img'>
        <img src={member.image} alt={member.name} />
      </div>
      <div className='member_info'>
        <h3 className='text-hglt'>{member.name}</h3>
        <h4>{member.designation}</h4>
      </div>
    </div>
  );
}

export default Team;
