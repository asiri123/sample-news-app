import * as React from "react"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"

export default function Navbar() {
  const [value, setValue] = React.useState("1")

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Box>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label="Polotical"
              value="1"
              style={{
                color: "#000000",
                textTransform: "none",
                fontWeight: "700",
              }}
            />
            <Tab
              label="Sport"
              value="2"
              style={{
                color: "#000000",
                textTransform: "none",
                fontWeight: "700",
              }}
            />
            <Tab
              label="Travel"
              value="3"
              style={{
                color: "#000000",
                textTransform: "none",
                fontWeight: "700",
              }}
            />
            <Tab
              label="Culture"
              value="4"
              style={{
                color: "#000000",
                textTransform: "none",
                fontWeight: "700",
              }}
            />
            <Tab
              label="Life"
              value="5"
              style={{
                color: "#000000",
                textTransform: "none",
                fontWeight: "700",
              }}
            />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  )
}
