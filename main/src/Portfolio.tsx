import { Box, Link, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { Image } from '@chakra-ui/react'
import { SpreadGrid } from "./spreadGrid";
import './Portfolio.css';

export default function Portfolio() {

    const portfolioRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const htmlCollection = document.querySelectorAll('.grid')
        for (let grid of htmlCollection) {
            new SpreadGrid(grid);
        }
    }, [])

  return (
    <div className="content">
        <div ref={portfolioRef} className="grid grid--medium" data-duration="0.8" data-ease="expo" data-scale="1.5" data-max-rotation="8" data-spread="100" data-max-distance="2000">
            {PORTFOLIO_ITEMS.map((portfolioProject) => (
                <div  className="grid__item">
                    <div className="grid__item-img" style= {{backgroundImage:'url('+portfolioProject.image+')'}}></div>
                    <div className="middle">
                        <a href={portfolioProject.url}>
                            <div className="text">
                                {portfolioProject.description}
                            </div>
                            <svg width="18px" height="18px" viewBox="0 0 24 24">
                                    <path d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"></path>
                            </svg>

                        </a> 
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

interface PortfolioProject {
    url: string,
    image: string,
    description: string
}

const PORTFOLIO_ITEMS: Array<PortfolioProject> = [
    {
        image: 'assets/tpp.png',
        url: 'https://github.com/uoftblueprint/the-period-purse',
        description: "M. Nation"
    },
    {
        image: 'assets/csc110.png',
        url: 'https://github.com/edwardhuahan/csc110-project',
        description: "Twitter COVID19 Scraper"
    },
    {
        image: 'assets/atomic-model.png',
        url: 'https://edwardhuahan.github.io/atomic-model/',
        description: "Atomic Model Visualiser"
    },
    {
        image: 'assets/little-planet.png',
        url: 'https://github.com/edwardhuahan/little-planet',
        description: "Little Planet Photo Generator"
    },

];