// ourdomain.com/
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "The first meetup",
    image:
      "https://www.nordantech.com/media/pages/blog/community/8-tipps-fuer-ein-erfolgreiches-meeting/00022d9063-1643812301/meeting-tipps-erfolgreich-1200x630.jpg",
    address: "Some address, some city",
    description: "This is the first meetup",
  },
  {
    id: "m2",
    title: "The second meetup",
    image:
      "https://5256430.fs1.hubspotusercontent-na1.net/hub/5256430/hubfs/images/blog/run-an-effective-team-meeting.png?height=800&name=run-an-effective-team-meeting.png",
    address: "Some address, some city",
    description: "This is the second meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
