import React from 'react'
import {Avatar, Typography} from "@material-tailwind/react";

const MemberAvatar = ({ name, position, imageSrc}) => {
  return (

    <div className="flex flex-col items-center">
      <Avatar src={imageSrc} alt="avatar" className="w-20 h-20"/>
      <div>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {position}
        </Typography>
      </div>
    </div>
  );
}

export default MemberAvatar