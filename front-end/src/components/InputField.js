import { Label } from "@mui/icons-material";
import { Grid, TextField,} from "@mui/material";
import { useField } from "formik";

 function InputField(props) {

    const [field, meta, helpers] = useField(props);
    return (
        <form autoComplete="off">
            <Grid container={true} spacing={1}>
                <TextField
                    fullWidth
                    sx={{color: "#FFCE03", minWidth:300, maxWidth:300, marginLeft:2, marginRight:1, marginTop:3}}
                    style={{ display: "inline", gap: "1rem" }}
                    margin="normal"
                    variant="outlined"
                    label={Label}
                    {...field}
                    {...props}
                    error={meta.touched && Boolean(meta.error)}
                    helperText={meta.touched && meta.error}
                />
            </Grid>
        </form>
    );
 }
 export default InputField;