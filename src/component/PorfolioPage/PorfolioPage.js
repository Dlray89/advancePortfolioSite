import React from 'react'
import { useStyle } from './PortfolioPageStying'

const PortfolioPage = () => {
    const classes = useStyle()
    return(
        <div className={classes.Portfolio}>
            Portfolio Page
        </div>
    )
}


export default PortfolioPage