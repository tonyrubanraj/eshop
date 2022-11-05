import { Box, Typography, useTheme } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            E-SHOP
          </Typography>
          <div>
            Feugiat unde, corporis ante, dolore integer eaque ipsum phasellus
            possimus? Architecto, sociosqu metus provident, cumque minim
            molestiae mollis eleifend voluptatibus ipsa proident sequi repellat?
            Varius, odit laboriosam officia aut elit sollicitudin purus iure,
            dicta dapibus perferendis. Mi! Aliquet montes sapiente? Mollis dis,
            officiis itaque sagittis! Nostra ullamcorper fames nisi torquent.
          </div>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>
        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">123 XYZ Blvd, Toronto, ON M1R 5E3</Typography>
          <Typography mb="30px">Email: xyz@gmail.com</Typography>
          <Typography mb="30px">(254) 4R5 - 453</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
