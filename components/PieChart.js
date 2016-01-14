import d3 from 'd3'

export default class PieChart {
    constructor(options) {
        var options = options || {},
            dataset = options.dataset || {uid: [], value: [], color: []},
            width = options.width || 140,
            height = options.height || 140,
            radius = Math.min(width, height) / 2,
            defaultColor = options.defaultColor || '#c6c7c9',
            color = dataset.color,
            innerRadius = options.innerRadius || radius - 10,
            container = d3.select(options.container),
            total = options.total || 1000,
            usage,
            pie,
            arc,
            svg,
            path;

        const callbackMouseOver = (d, i) => {
            if (i > dataset.value.length - 1) {
                return;
            }
            if (typeof options.mouseover === 'function') {
                options.mouseover(dataset.uid[i]);
            }

            svg.selectAll('path')
                .attr('fill', function (dt, idx) {
                    if (i === idx) {
                        return color[i] || defaultColor;
                    }
                    return defaultColor;
                });
            svg.select('text.usage')
                .transition()
                .duration(300)
                .tween("text", function () {
                    var val = d3.interpolate(this.textContent, dataset.value[i]);
                    return function (t) {
                        this.textContent = Math.floor(val(t));
                    };
                })
                .attr('fill', function () {
                    return color[i] || defaultColor;
                });
        }

        const callbackMouseOut = (d, i) => {
            if (i > dataset.value.length - 1) {
                return;
            }

            if (typeof options.mouseover === 'function') {
                options.mouseout(dataset.uid[i]);
            }

            svg.selectAll('path')
                .attr('fill', (dt, idx) => color[idx] || defaultColor);
            svg.select('text.usage')
                .transition()
                .duration(300)
                .tween("text", function (e, i, a) {
                    var val = d3.interpolate(this.textContent, usage);
                    return function (t) {
                        this.textContent = Math.floor(val(t));
                    }
                })
                .attr('fill', () => defaultColor);
        }

        usage = dataset.value.reduce((prev, curr) => Math.floor(prev) + Math.floor(curr), 0);

        pie = d3.layout.pie()
            .sort(null);

        arc = d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(radius);

        svg = container.append('svg')
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        path = svg.selectAll('path')
            .data(pie(dataset.value.concat([total - usage])));

        path.enter().append("path")
            .attr("fill", function (d, i) {
                return color[i] || defaultColor;
            })
            .attr("d", arc)
            .on('mouseenter', callbackMouseOver)
            .on('mouseout', callbackMouseOut);

        svg.append("text")
            .attr('class', 'sum')
            .attr('fill', defaultColor)
            .attr("text-anchor", "middle")
            .style('font-size', '30px')
            .attr('y', 35)
            .transition()
            .duration(1000)
            .tween("text", function (e, i, a) {
                var val = d3.interpolate(0, total);
                return function (t) {
                    this.textContent = Math.floor(val(t));
                };
            })

        svg.append('rect')
            .attr('x', -height / 3)
            .attr('width', 2 * height / 3)
            .attr('y', 0)
            .attr('height', 3)
            .attr('fill', defaultColor);

        svg.append('text')
            .attr('class', 'usage')
            .attr('fill', defaultColor)
            .style('font-size', '30px')
            .attr("text-anchor", "middle")
            .attr('y', -8)
            .transition()
            .duration(1000)
            .tween("text", function (e, i, a) {
                var val = d3.interpolate(0, usage);
                return function (t) {
                    this.textContent = Math.floor(val(t));
                };
            })

        return {
            hover(uid) {
                var idx = dataset.uid.indexOf(uid);
                if (~idx) {
                    callbackMouseOver(null, idx);
                }
                return this;
            },

            out (uid) {
                var idx = dataset.uid.indexOf(uid);
                if (~idx) {
                    callbackMouseOut(null, idx);
                }
                return this;
            },

            append(data) {
                for (k in dataset) {
                    dataset[k].push(data[k]);
                }
                usage += data.value;
                return this;
            },

            remove(uid) {
                var i = dataset.uid.indexOf(uid),
                    free = dataset.value[i];

                for (k in dataset) {
                    dataset[k].splice(i, 1);
                }

                usage -= free;
                return this;
            },

            redraw() {
                var paths = svg.selectAll('path')
                    .data([])

                // strange...
                paths.exit().remove()

                paths = svg.selectAll('path')
                    .data(pie(dataset.value.concat([total - usage])));
                paths.enter().append("path")
                    .attr("fill", function (d, i) {
                        return color[i] || defaultColor;
                    })
                    .attr("d", arc)
                    .on('mouseenter', callbackMouseOver)
                    .on('mouseout', callbackMouseOut);

                svg.select('text.usage')
                    .transition()
                    .duration(300)
                    .tween("text", function (e, i, a) {
                        var val = d3.interpolate(this.textContent, usage);
                        return function (t) {
                            this.textContent = Math.floor(val(t));
                        };
                    })
                    .attr('fill', function () {
                        return defaultColor;
                    });

                return this;
            }
        }
    }
}
