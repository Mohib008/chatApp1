import React from 'react';
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon
} from '@heroicons/react/outline';
import SidebarRow from './SidebarRow';

function Sidebar() {
  return (
    <div className='col-span-2 flex flex-col items-center px-4
     md:items-start m-4'>
      <img className='h-10 w-10 ml-3' src='https://links.papareact.com/drq' alt='' />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="explorer" />
      <SidebarRow Icon={BellIcon} title="Notifecation" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} title="Sign In" />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="more" />
    </div>
  )
}

export default Sidebar