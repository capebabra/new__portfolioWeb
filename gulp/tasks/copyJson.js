import gulp from "gulp";
import { path } from "../config/path.js";
import { plugins } from "../config/plugins.js";

export const copyJson = () => {
    return gulp.src(path.src.json)
        .pipe(gulp.dest(path.build.json))
        .pipe(plugins.browsersync.stream());
};
