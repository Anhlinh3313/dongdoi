import axios from "axios";
import { API_URL} from "../app/@function/constant";

export const getSchemaByPage = async (slug) => {
  try {
    const response = await axios.get(
        `${API_URL}/api/schema/getByPage/${slug}`
      );
    const schema =  response.data && response.data?.map((item,index) =>{
        return {
            name:item.name,
            script:item.script
        }
    })
    return schema;
  } catch (error) {
}
};

export const getSchemaByPostId = async (id) => {
  try {
    // const response = await axios.get(
    //     `${API_URL}/api/schema/getByPost/${id}`
    //   );
    const response = await axios.get(
      `${API_URL}/api/schema/getByPost/${id}`
    );
    const schema =  response.data && response.data?.map((item,index) =>{
        return {
            name:item.name,
            script:item.script
        }
    })
    return schema;
  } catch (error) {
  }
};
