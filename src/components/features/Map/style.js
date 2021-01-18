import styled from "styled-components";

export const BaseMap = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
`;

export const SearchInputWrapper = styled.div`
    position: absolute;
    top: 0;
    margin-block-start: 20px;
    margin-inline-start: 20px;
    width: 200px;
    border-radius: 7px;
    height: auto;
    z-index: 9999;
    box-sizing: border-box;
`;

export const mapStyles = [
    {
        featureType: "all",
        elementType: "all",
        stylers: [
            {
                saturation: "32",
            },
            {
                lightness: "-3",
            },
            {
                visibility: "on",
            },
            {
                weight: "1.18",
            },
        ],
    },
    {
        featureType: "administrative",
        elementType: "labels",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "landscape",
        elementType: "labels",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "landscape.man_made",
        elementType: "all",
        stylers: [
            {
                saturation: "-70",
            },
            {
                lightness: "14",
            },
        ],
    },
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "road",
        elementType: "labels",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "transit",
        elementType: "labels",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "all",
        stylers: [
            {
                saturation: "100",
            },
            {
                lightness: "-14",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "labels",
        stylers: [
            {
                visibility: "off",
            },
            {
                lightness: "12",
            },
        ],
    },
];
