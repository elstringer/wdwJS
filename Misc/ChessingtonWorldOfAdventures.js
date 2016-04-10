// schedule: https://www.chessington.com/plan/chessington-opening-times.aspx
//   schedule data is inside the HTML... euch...

// challenge->response is similar to Alton Towers... except the challenge and response and reversed and the API key is different
//  ... and it's got a whole weird session thing going on (which lasts for... how long???)

// 1. Get session: https://legacy-api.attractions.io/apps/command/chessington/account
// 2. Get challenge: https://legacy-api.attractions.io/apps/command/chessington/queue-times
//      POST data (multipart/formdata):
//        session: [SESSION-GUID]
//        resort: 44
//        challenge: [current timestamp in milliseconds]
//        response: [generated response of our generated timestamp]
// 3. Send response: https://legacy-api.attractions.io/apps/command/chessington/queue-times
//      POST data (multipart/formdata):
//        session: [SESSION-GUID]
//        resort: 44
//        challenge: [challenge string from previous response]
//        response: [generated response of challenge string]

// var APIKey = "edqXyMWFtuqGY6BZ9Epkzg4ptqe6v3c7tdqa97VbXjvrgZHC";
// var response = crypto.createHash('md5').update(challenge + APIKey).digest("hex");

// example queue-times output:
//{"queue-times":[{"id":3927,"is_operational":true,"wait_time":45,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3928,"is_operational":true,"wait_time":20,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3948,"is_operational":true,"wait_time":30,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3929,"is_operational":true,"wait_time":50,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3930,"is_operational":true,"wait_time":20,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3931,"is_operational":true,"wait_time":35,"last_updated":"2016-04-10T16:34:32+01:00"},{"id":3932,"is_operational":true,"wait_time":25,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3933,"is_operational":true,"wait_time":50,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3934,"is_operational":false,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3935,"is_operational":true,"wait_time":5,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3936,"is_operational":true,"wait_time":5,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3937,"is_operational":true,"wait_time":10,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3938,"is_operational":true,"wait_time":45,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3939,"is_operational":true,"wait_time":5,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3940,"is_operational":true,"wait_time":5,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3941,"is_operational":true,"wait_time":5,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3942,"is_operational":true,"wait_time":45,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3952,"is_operational":true,"wait_time":25,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3961,"is_operational":true,"wait_time":15,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3953,"is_operational":false,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3954,"is_operational":true,"wait_time":15,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3949,"is_operational":true,"wait_time":30,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3950,"is_operational":true,"wait_time":15,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3951,"is_operational":true,"wait_time":5,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3955,"is_operational":true,"wait_time":5,"last_updated":"2016-04-10T16:34:31+01:00"},{"id":3962,"is_operational":true,"wait_time":5,"last_updated":"2016-04-10T16:34:31+01:00"}],"event-times":{"show-times":[{"id":3947,"times":["2016-04-10T11:30:00+01:00","2016-04-10T12:30:00+01:00","2016-04-10T14:30:00+01:00"]},{"id":3958,"times":["2016-04-10T12:00:00+01:00","2016-04-10T14:00:00+01:00","2016-04-10T16:00:00+01:00"]},{"id":3973,"times":["2016-04-10T10:45:00+01:00"]},{"id":3998,"times":["2016-04-10T12:00:00+01:00","2016-04-10T15:00:00+01:00"]},{"id":4020,"times":["2016-04-10T11:15:00+01:00"]},{"id":4021,"times":["2016-04-10T11:30:00+01:00","2016-04-10T14:30:00+01:00"]},{"id":4022,"times":["2016-04-10T12:00:00+01:00","2016-04-10T15:00:00+01:00"]},{"id":4023,"times":["2016-04-10T12:30:00+01:00"]},{"id":4024,"times":["2016-04-10T13:15:00+01:00"]},{"id":4025,"times":["2016-04-10T14:00:00+01:00","2016-04-10T16:00:00+01:00"]},{"id":4026,"times":["2016-04-10T14:15:00+01:00"]},{"id":4027,"times":["2016-04-10T14:45:00+01:00"]},{"id":4028,"times":["2016-04-10T16:15:00+01:00"]},{"id":4093,"times":["2016-04-10T11:30:00+01:00","2016-04-10T12:45:00+01:00","2016-04-10T15:30:00+01:00","2016-04-10T16:30:00+01:00"]},{"id":4094,"times":["2016-04-10T10:15:00+01:00","2016-04-10T14:15:00+01:00"]},{"id":4095,"times":["2016-04-10T11:45:00+01:00","2016-04-10T12:45:00+01:00","2016-04-10T14:15:00+01:00","2016-04-10T15:15:00+01:00"]},{"id":4096,"times":["2016-04-10T10:30:00+01:00","2016-04-10T16:15:00+01:00"]}]}}