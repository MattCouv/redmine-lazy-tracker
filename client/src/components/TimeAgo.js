import React from "react";
import frenchStrings from "react-timeago/lib/language-strings/fr";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import Time from "react-timeago";

const formatter = buildFormatter(frenchStrings);

const TimeAgo = ({ date }) => <Time date={date} formatter={formatter} />;

export default TimeAgo;
