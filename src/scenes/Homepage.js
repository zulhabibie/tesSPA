import React from 'react'
import Button from 'elements/Button'
import { Link } from 'react-router-dom'

export default function Homepage() {
    return (
        <div>
            <div className="container">
            <Button isPrimary isSmall isWidthMobile>
                Sign Up
            </Button>
            </div>
        </div>
    )
}
