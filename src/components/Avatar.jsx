import React from 'react'
import {Avatar, Typography} from "@material-tailwind/react";

const MemberAvatar = ({ name, position, imageSrc}) => {
  return (

    <div className="flex flex-col items-center gap-y-2 mb-2">
      <Avatar src={imageSrc} alt="avatar" className="w-25 h-24"/>
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