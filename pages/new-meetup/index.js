import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetupPage() {

    function addMeetupHandler (enteredMeeupData){
        console.log(enteredMeeupData)
    }
  return ( <NewMeetupForm onAddMeetup= {addMeetupHandler}/>
    
  )
}

export default NewMeetupPage