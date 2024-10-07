/**
 * 
 * @param url 
 * @param responseHeaders 
 * @param payload 
 * @param responseData 
 */
export function logTestDetails(
    url: string,
    requestHeaders: Record<string, any>,
    responseHeaders: Record<string, any>,
    payload?: Record<string, any>,
    responseData?: Record<string, any>
): void {
    console.log("Endpoint:", url);

    if (payload) {
        console.log("Payload:");
        console.table(payload);
    }

    console.log("Request Headers:");
    console.table(requestHeaders);

    console.log("Response Headers:");
    console.table(responseHeaders);

    if (responseData) {
        console.log("Response Data:");
        console.table(responseData);
    }
}