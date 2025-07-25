export function useBem(base: string) {
    // ToDo Will return scrambled classname
    const bem = (
        name?: string | Record<string, boolean>,
        ...names: string[]
    ) => {
        const classnames = [];

        if (name === base) {
            classnames.push(base);
        } else {
            if (typeof name === 'string' && name !== '') {
                classnames.push(`${base}__${name}`);
            }

            if (typeof name === 'object') {
                classnames.push(
                    Object.entries(name)
                        .filter(([, value]) => value)
                        .map(([key]) => `${base}__${key}`)
                        .join(' ')
                );
            }

            classnames.push(base);
        }

        for (const classname of names) {
            classnames.push(classname);
        }

        return classnames.join(' ');
    };

    // ToDo Looks unnecesery, but later will return unscrambled className
    const element = (element?: string | Record<string, boolean>) => {
        if (typeof element === 'string' && element !== '') {
            return `${base}__${element}`;
        }

        if (typeof element === 'object') {
            return Object.entries(element)
                .filter(([, value]) => value)
                .map(([key]) => `${base}__${key}`)
                .join(' ');
        }

        return base;
    };

    const modifier = (modifier: string | Record<string, boolean>) => {
        if (typeof modifier === 'string' && modifier !== '') {
            return `${base}--${modifier}`;
        }

        if (typeof modifier === 'object') {
            return Object.entries(modifier)
                .filter(([, value]) => value)
                .map(([key]) => `${base}--${key}`)
                .join(' ');
        }

        return '';
    };

    return {
        bem,
        element,
        modifier,
        base,
    };
}
