import { NavLink } from "react-router-dom";
import React from "react";

import style from "./MainNavigation.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

import { useSelector, useDispatch } from "react-redux";
import { galleryActions } from "../store/gallery";

export default function MainNavigation() {
  const galleryOptions = useSelector((state) => state.gallery.galleryOptions);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(galleryActions.showViral());
  };

  const handleSectionChange = (event) => {
    dispatch(galleryActions.setSection({ section: event.target.value }));
  };

  const handleWindownChange = (event) => {
    dispatch(galleryActions.setWindow({ window: event.target.value }));
  };

  const handleSortChange = (event) => {
    dispatch(galleryActions.setSort({ sort: event.target.value }));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#25235F'}}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: "#fff"}}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              end
            >
              Imgur
            </NavLink>
          </Typography>

          <FormControl
            variant="standard"
            sx={{ mr: 5, minWidth: 120, color: "#fff" }}
          >
            <InputLabel id="section-select" sx={{ color: "#fff", fontSize: '20px'  }}>
              Section
            </InputLabel>
            <Select
              labelId="section-select"
              value={galleryOptions.section}
              onChange={handleSectionChange}
              label="Section"
              sx={{ color: "#fff", fontSize: '13px' }}
              className={style.formSelect}
            >
              <MenuItem value="hot">Hot</MenuItem>
              <MenuItem value="top">Top</MenuItem>
              <MenuItem value="user">User</MenuItem>
            </Select>
          </FormControl>

          {galleryOptions.section == "top" && (
            <FormControl
              variant="standard"
              sx={{ mr: 5, minWidth: 120, color: "#fff" }}
            >
              <InputLabel id="window-select" sx={{ color: "#fff", fontSize: '20px' }}>
                Window
              </InputLabel>
              <Select
                labelId="window-select"
                value={galleryOptions.window}
                onChange={handleWindownChange}
                label="Window"
                sx={{ color: "#fff", fontSize: '13px' }}
                className={style.formSelect}
              >
                <MenuItem value="day">Day</MenuItem>
                <MenuItem value="week">Week</MenuItem>
                <MenuItem value="month">Month</MenuItem>
                <MenuItem value="years">Years</MenuItem>
                <MenuItem value="all">All</MenuItem>
              </Select>
            </FormControl>
          )}

          {galleryOptions.section == "user" && (
            <>
              <FormControl
                variant="standard"
                sx={{ mr: 5, minWidth: 120, color: "#fff" }}
              >
                <InputLabel id="sort-select" sx={{ color: "#fff", fontSize: '20px' }}>
                  Sort
                </InputLabel>
                <Select
                  labelId="sort-select"
                  value={galleryOptions.sort}
                  onChange={handleSortChange}
                  label="Sort"
                  sx={{ color: "#fff", fontSize: '13px' }}
                  className={style.formSelect}
                >
                  <MenuItem value="viral">Viral</MenuItem>
                  <MenuItem value="top">Top</MenuItem>
                  <MenuItem value="time">Time</MenuItem>
                  <MenuItem value="rising">Rising</MenuItem>
                </Select>
              </FormControl>

              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={galleryOptions.showViralImages}
                      onChange={handleChange}
                      aria-label="login switch"
                  
                      color="success"
                     
                    />
                  }
                  label={
                    galleryOptions.showViralImages
                      ? "Hide Viral Images"
                      : "Show Viral Images"
                  }
                />
              </FormGroup>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
