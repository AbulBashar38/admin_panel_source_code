//*Dropzone.js*//

import React from "react";
import { useDropzone } from "react-dropzone";
import Image from '../../../assets/ImageSquare.png'
import { Typography, Grid } from "@mui/material";

import "./styles.css";
function Dropzone({ onDrop, accept, image }) {
    const { getRootProps, getInputProps, acceptedFiles, isDragActive, } = useDropzone({
        accept,
        onDrop
    });

    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));
    return (
        <Grid {...getRootProps({ className: "dropzone" })}>
            <input className="input-zone" {...getInputProps()} />
            {!image && <div className="text-center">
                <img src={Image} />
                {isDragActive ? (
                    <Typography className="dropzone-content">
                        Release to drop the image here
                    </Typography>
                ) : (
                    <Typography color={""} className="dropzone-content">
                        Vendor Image
                    </Typography>
                )}

            </div>}
            {image && <img className="imageShow" src={image} />}
        </Grid>
    );
}

export default Dropzone;