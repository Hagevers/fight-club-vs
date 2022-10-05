import React, {useState} from "react"

function componentDidMount () {
    const [confirming,setConfirming] = useState(true)
    const { id } = this.props.match.params

    fetch('api/email/confirm/${id}')
      .then(res => res.json())
      .then(data => {
        this.setState(setConfirming(false))
        notify.show(data.msg)
      })
      .catch(err => console.log(err))
      return (
        <div>
            <h1>User has been confirmed</h1>
        </div>
      )
}

export default componentDidMount