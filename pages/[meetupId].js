import MeetupDetail from "../components/meetups/MeetupDetail";

//ourdomain.com/mettingId
function MeetUpDetails() {
  return (
    <MeetupDetail
      image="https://www.nordantech.com/media/pages/blog/community/8-tipps-fuer-ein-erfolgreiches-meeting/00022d9063-1643812301/meeting-tipps-erfolgreich-1200x630.jpg"
      title="first meetup"
      address="some street,some city"
      description="this is our first meetup"
    />
  );
}

export default MeetUpDetails;
