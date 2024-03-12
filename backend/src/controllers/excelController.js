import xlsx from "xlsx";
import path from "path";


const readExcelController = (req, res) => {

    // console.log("Current Working Directory:", process.cwd());

    const filePath = path.resolve("./booking_ids_wise_healthdata.xlsx");
    // console.log("Absolute Path to File:", filePath);

    try {
        const workbook = xlsx.readFile(filePath);
        let workbook_sheet = workbook.SheetNames;
        let workbook_response = xlsx.utils.sheet_to_json(workbook.Sheets[workbook_sheet[0]]);

        workbook_response.forEach(obj => {
            obj.test_values = JSON.parse(obj.test_values);
        })
        
        return workbook_response;
        // res.status(200).send({
        //     message: workbook_response,
        // });
        
    } catch (error) {
        console.error("Error reading file:", error.message);
        res.status(500).send({
            error: "Internal Server Error",
        });
    }
};

export {readExcelController};
