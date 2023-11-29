
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SectionHeader from '../../../../components/shared/SectionHeader';

export default function BasicAccordion() {
  return (
    <div className=' my-28 '>
        <SectionHeader  header={"Frequently Ask Questions"}></SectionHeader>
      <div className=' w-[50vw] mx-auto'>
      <Accordion sx={{backgroundColor: 'transparent', color:"white"}} className=''>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What types of websites does your company specialize in?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Specify if you focus on e-commerce, corporate, portfolio, or other types of websites.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: 'transparent', color:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do you use Content Management Systems (CMS) for website development?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Explain if you use CMS platforms like WordPress, Joomla, or others.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: 'transparent', color:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do you ensure that websites are responsive and mobile-friendly?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Explain if you use CMS platforms like WordPress, Joomla, or others.Discuss your approach to responsive design and optimizing websites for various devices.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: 'transparent', color:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Which platforms do you develop mobile apps for (iOS, Android, both)?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Clarify the mobile platforms your company supports.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: 'transparent', color:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do you use Content Management Systems (CMS) for website development?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Explain if you use CMS platforms like WordPress, Joomla, or others.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: 'transparent', color:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do you create native or cross-platform mobile apps?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Explain whether you develop apps natively or use cross-platform frameworks.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: 'transparent', color:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can you assist with app store submissions and approvals?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Detail your involvement in the app submission process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: 'transparent', color:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can you assist with app store submissions and approvals?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Detail your involvement in the app submission process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: 'transparent', color:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can you assist with app store submissions and approvals?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Detail your involvement in the app submission process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: 'transparent', color:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can you assist with app store submissions and approvals?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Detail your involvement in the app submission process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: 'transparent', color:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can you assist with app store submissions and approvals?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Detail your involvement in the app submission process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: 'transparent', color:"white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can you assist with app store submissions and approvals?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Detail your involvement in the app submission process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      </div>
    </div>
  );
}
