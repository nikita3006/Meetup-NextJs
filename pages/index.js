import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";


function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active React meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// export async function getServerSideProps(context){
//   const res = context.res;
//   const req = context.req
//   return{
//     props:{
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps(){
  const userName = 'varunk2801'
  const password = 'Wertz@56625'
  const client = await MongoClient.connect(`mongodb+srv://${userName}:${encodeURIComponent(password)}@cluster0.pkamdrt.mongodb.net/meetups?retryWrites=true&w=majority`);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup =>({
        title: meetup.title,
        address : meetup.address,
        image : meetup.image,
        id: meetup._id.toString()
      })),
    },
    revalidate : 10
  }

}

export default HomePage;
