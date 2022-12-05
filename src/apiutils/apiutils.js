//export const host = "http://192.168.29.139:3003"
export const host = "http://192.168.1.9:3003"
export const signUpRoute = `${host}/auth/register`
export const VerifyOtpRoute = `${host}/auth/verify`
export const ResendVerifyOtpRoute = `${host}/auth/resend`
export const LoginRoute = `${host}/auth/login`
export const LoginViaNumberRoute = `${host}/auth/loginViaMobile`
export const signUpViaMobileRoute = `${host}/auth/registerViaMobile`
export const ForgetPasswordRoute = `${host}/auth/forgetpassword`
export const ResetpasswordverifyotpRoute = `${host}/auth/resetpasswordverifyotp`
export const ResetpasswordRoute = `${host}/auth/resetpassword`
export const googleSignInRoute = `${host}/auth/googleSignIn`
export const updateProfileRoute = `${host}/auth/updateProfile`
export const listValidUsernameRoute = `${host}/auth/listValidUsername`
export const listValidUsernameSignInRoute = `${host}/auth/listValidUsernameSignIn`
export const uploadImageRoute = `${host}/auth/uploadImage`
export const addLinkRoute = `${host}/auth/addlink`
export const listLinkRoute = `${host}/auth/link`
export const updateLinkRoute = `${host}/auth/updatelink`

export const createPostRoute = `${host}/post/createPost`
export const listPostBasedOnUserRoute = `${host}/post/listPost`
export const searchUserRoute = `${host}/post/searchUser`
export const followRequestRoute = `${host}/post/followRequest`
export const unfollowRequestRoute = `${host}/post/unfollowRequest`
export const showFanPostRoute = `${host}/post/listFanPost`
export const updateCountRoute = `${host}/post/updateCount`
export const checkFanRoute = `${host}/post/checkFan`

export const createMessageRoute = `${host}/message/createMessage`
export const listMessageRoute = `${host}/message/listMessage`
export const listContactseRoute = `${host}/message/listContacts`
export const listUsersRoute = `${host}/message/listUsers`

export const partnerRequestRoute = `${host}/auth/partnerRequest`
export const partnerAcceptRoute = `${host}/auth/partnerAccept`
export const partnerDeclineRoute = `${host}/auth/partnerDecline`
export const listPartnerRoute = `${host}/auth/listPartner`

export const listNotificationRoute = `${host}/notification/listNotification`