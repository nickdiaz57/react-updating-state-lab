// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

    constructor() {
        super()
        
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    handleBitrate = () => {
        this.setState(previousState => {
            return (
                {...previousState,
                    settings: {...previousState.settings,
                    bitrate: 12}
                })
        })
    }//12

    handleResolution = () => {
        this.setState(previousState => {
            return (
                {...previousState,
                    settings: {...previousState.settings,
                    video: {resolution: '720p'}}
                })
        })
    }//720p

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleBitrate}>{this.state.settings.bitrate}</button>
                <button className='resolution' onClick={this.handleResolution}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}